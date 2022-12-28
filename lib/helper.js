export const getUsers = async () => {
  const response = await fetch("http://localhost:3000/api/hello");
  const json = await response.json();

  return json;
};

export async function addUser(formData) {
  try {
    (async () => {
      const rawResponse = await fetch("http://localhost:3000/api/hello", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const content = await rawResponse.json();
    })();
  } catch (error) {
    return error;
  }
}
