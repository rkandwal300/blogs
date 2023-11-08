import React from "react";
import { Button } from "../../components/ui/button";
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { handlegetUserSlot } from "@/redux/features/chatSlice";

const DateTimePicker = (props: any) => {
  const [selectedDateId, setSelectedDateId] = React.useState<number | null>(
    null
  );
  const [selectedTimeId, setSelectedTimeId] = React.useState<number | null>(
    null
  );

  const dispatch = useDispatch();

  const [date, setDate] = React.useState({
    date: "",
    time: "",
  });

  const handleSchedule = () => {
    const scheduleDate = `${date.date},${date.time}`;
    dispatch(handlegetUserSlot(scheduleDate));

    // props.actionProvider.handleJavascriptQuiz;

    const message = createClientMessage(scheduleDate, {});
    const botmessage = createChatBotMessage("Enter your Name", {
      widget: "userName",
    });
    props.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message, botmessage],
    }));
  };

  const days = [
    {
      date: "1 November",
      day: "Monday",
      handler: () => {},
      id: 1,
    },
    {
      date: "2 November",
      day: "Tuesday",
      handler: () => {},
      id: 2,
    },
    {
      date: "3 November",
      day: "Wednesday",
      handler: () => {},
      id: 3,
    },
    {
      date: "4 November",
      day: "Thursday",
      handler: () => {},
      id: 4,
    },
    {
      date: "5 November",
      day: "Friday",
      handler: () => {},
      id: 5,
    },
    {
      date: "6 November",
      day: "Saturday",
      handler: () => {},
      id: 6,
    },
    {
      date: "7 November",
      day: "Sunday",
      handler: () => {},
      id: 7,
    },
    {
      date: "8 November",
      day: "Monday",
      handler: () => {},
      id: 8,
    },
    {
      date: "9 November",
      day: "Tuesday",
      handler: () => {},
      id: 9,
    },
    {
      date: "10 November",
      day: "Wednesday",
      handler: () => {},
      id: 10,
    },
    {
      date: "11 November",
      day: "Thursday",
      handler: () => {},
      id: 11,
    },
    {
      date: "12 November",
      day: "Friday",
      handler: () => {},
      id: 12,
    },
    {
      date: "13 November",
      day: "Saturday",
      handler: () => {},
      id: 13,
    },
    {
      date: "14 November",
      day: "Sunday",
      handler: () => {},
      id: 14,
    },
  ];

  const noon = [
    {
      text: "02:00 PM",
      handler: () => {},
      id: 12,
    },
    {
      text: "03:00 PM",
      handler: () => {},
      id: 22,
    },
    {
      text: "04:00 PM",
      handler: () => {},
      id: 23,
    },
    {
      text: "05:00 PM",
      handler: () => {},
      id: 24,
    },
  ];
  const morning = [
    {
      text: "09:00 AM",
      handler: () => {},
      id: 1,
    },
    {
      text: "10:00 AM",
      handler: () => {},
      id: 2,
    },
    {
      text: "11:00 AM",
      handler: () => {},
      id: 3,
    },
    {
      text: "12:00 AM",
      handler: () => {},
      id: 4,
    },
  ];

  const Weeks = days.map((option) => (
    <Button
      variant={"outline"}
      key={option.id}
      onClick={() => {
        setSelectedDateId(option.id);
        setDate({ ...date, date: `${option.date},${option.day}` });
      }}
      className={
        "flex flex-col items-center gap-0.5 " +
        (selectedDateId == option.id
          ? "bg-primary/70 text-primary-foreground hover:bg-primary/70 hover:text-primary-foreground"
          : "")
      }
    >
      <span className="text-xs font-medium">{option.date}</span>
      <span className="text-xs font-medium text-foreground">{option.day}</span>
    </Button>
  ));
  const Noon = noon.map((option) => (
    <Button
      variant={"outline"}
      key={option.id}
      onClick={() => {
        setSelectedTimeId(option.id);
        setDate({ ...date, time: option.text });
      }}
      className={
        "flex flex-col items-center gap-0.5 text-xs font-medium " +
        (selectedTimeId == option.id
          ? "bg-primary/70 text-primary-foreground hover:bg-primary/70 hover:text-primary-foreground"
          : "")
      }
    >
      {option.text}
    </Button>
  ));
  const Morning = morning.map((option) => {
    return (
      <Button
        variant={"outline"}
        key={option.id}
        onClick={() => {
          setSelectedTimeId(option.id);
          setDate({ ...date, time: option.text });
        }}
        className={
          "flex flex-col items-center gap-0.5 text-xs font-medium " +
          (selectedTimeId == option.id
            ? "bg-primary/70 text-primary-foreground hover:bg-primary/70 hover:text-primary-foreground"
            : "")
        }
      >
        {option.text}
      </Button>
    );
  });

  return (
    <div className="max-w-sm flex flex-col items-center">
      <div className="flex items-center w-full flex-nowrap overflow-auto p-2 m-1.5 gap-2">
        {Weeks}
      </div>
      <div className="flex gap-1">{Morning}</div>
      <div className="flex gap-1">{Noon}</div>
      <div className="w-full pt-3  grid justify-items-end">
        <Button
          disabled={!(selectedDateId && selectedTimeId)}
          size="sm"
          onClick={() => {
            handleSchedule();
          }}
        >
          Schedule
        </Button>
      </div>
    </div>
  );
};

export default DateTimePicker;
