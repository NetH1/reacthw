interface iApi{
  form:{
    email?: string;
  feedback?: string;
  checkboxaccept?: boolean;
  checkboxdisagree?: boolean;
  }
}
export const FeedBackPost = async({form}:iApi):Promise<any> => {
  try {
    const response = await fetch("http://localhost:3000/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    if (!response.ok) {
      throw new Error("server bad");
    }
  } catch (error) {
    console.log(error);
  }
    }