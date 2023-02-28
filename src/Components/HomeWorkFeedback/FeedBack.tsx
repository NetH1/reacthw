import { useState } from "react";
import { FeedBackPost } from "../../api/FeedBack";

interface IFeedBackProps {}
type typeFormState = {
  email?: string;
  feedback?: string;
  checkboxaccept?: boolean;
  checkboxdisagree?: boolean;
};

const FeedBack: React.FC<IFeedBackProps> = () => {
  const [form, setForm] = useState<typeFormState>({
    email: "",
    feedback: "",
    checkboxaccept: false,
    checkboxdisagree: false,
  });

  const onChangeFormHandler = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ): void => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type =='checkbox' ? checked : value
    }));
  };

  const FormSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await FeedBackPost({form})
    setForm({ email: "", feedback: "", checkboxaccept: false,checkboxdisagree:false });
  };

  return (
    <div>
      <form method="post" onSubmit={FormSumbit}>
        <label>
          Email:
          <input name="email" type="email" value={form.email} onChange ={onChangeFormHandler} />
        </label>
        <label>
            Feedback:
          <textarea
            name="feedback"
            value={form.feedback}
            onChange={onChangeFormHandler}
          ></textarea>
        </label>
        <span> согласны или не согласены на получение спам рассылки</span>
        <label htmlFor="checkboxaccept">A <input type="checkbox" checked ={form.checkboxaccept} onChange ={onChangeFormHandler} name="checkboxaccept" id="checkboxaccept" />Согласен</label>
        <label htmlFor="checkboxdisagree">B<input type="checkbox" checked = {form.checkboxdisagree} onChange ={onChangeFormHandler} name="checkboxdisagree" id="checkboxdisagree" />Не согласен</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedBack;
