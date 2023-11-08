import { createClientMessage, createChatBotMessage } from "react-chatbot-kit";
import { Button } from "../../components/ui/button";

const Options = (props: any) => {
  const options = [
    {
      text: " Got it!",
      handler: () => {
        // props.actionProvider.handleJavascriptQuiz;

        const message = createClientMessage("Got it!", {});
        const botmessage = createChatBotMessage("Pick a Slot !", {
          widget: "PickSlot",
        });
        props.setState((prev: any) => ({
          ...prev,
          messages: [...prev.messages, message, botmessage],
        }));
      },
      id: 1,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <Button variant={"outline"} key={option.id} onClick={option.handler}>
      {option.text}
    </Button>
  ));

  return (
    <div className="flex items-center flex-wrap bg-transparent px-2 m-1.5 gap-2 max-w-sm">
      {buttonsMarkup}
    </div>
  );
};

export default Options;
