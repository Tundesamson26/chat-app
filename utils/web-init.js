// Init your Web SDK
import { Appwrite } from "appwrite";


export const sdk = new Appwrite();
sdk
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("chatID"); // Your project ID

export const createAnonymousSession = async () => {
  try {
    await sdk.account.createAnonymousSession();
  } catch (err) {
    console.log(err);
  }
};
