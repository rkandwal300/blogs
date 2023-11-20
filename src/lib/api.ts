export const fetchApi = async (route: string, query: string) => {
  const apiUrl = `https://cms-my-strapi-project.onrender.com/api/${route}?${query}`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (response.ok) {
      return result?.data;
    } else {
      console.error("Failed to create doctors:", result);
      console.error("Response!ok :", result?.error?.message);
    }
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};
