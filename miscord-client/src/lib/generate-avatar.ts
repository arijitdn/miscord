export default async function generateAvatar() {
  const response = await fetch("https://picsum.photos/200", {
    method: "GET",
  });

  return response.url;
}
