export const getUsers = async () => {
  const response = await fetch("https://newcarnet.vercel.app/api/hello");
  const json = await response.json();

  return json;
};

export async function addUser(formData) {
  try {
    (async () => {
      const rawResponse = await fetch(
        "https://newcarnet.vercel.app/api/hello",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const content = await rawResponse.json();

      console.log(content);
    })();
  } catch (error) {
    return error;
  }
}
