import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateSubscriberMutation,
  usePublishSubscriberMutation,
} from "../../graphql/generated";
import { InputComponent } from "../InputComponent";

export const SubscribeFormComponent: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading: createLoad, data }] =
    useCreateSubscriberMutation();
  const [publishSubscriber, { loading: publishLoad }] =
    usePublishSubscriberMutation();

  const navigate = useNavigate();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
  };

  useEffect(() => {
    if (data) {
      publishSubscriber({
        variables: {
          email: email,
        },
      });
      navigate("/event");
    }
  }, [data]);

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex flex-col p-6 sm:p-8 bg-grey-700 border border-grey-500 min-w-[24.43rem]"
    >
      <h2 className="text-2xl font-bold">Inscreva-se gratuitamente</h2>

      <fieldset className="flex flex-col mt-6 gap-2">
        <InputComponent
          type="text"
          id="fullName"
          onChange={(event) => setName(event.target.value)}
          placeholder="nome completo"
        />
        <InputComponent
          type="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
        />
      </fieldset>
      <button
        disabled={createLoad && publishLoad}
        className="flex item-center mt-6 disabled:opacity-50 gap-2 justify-center bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-4 rounded whitespace-wrap  sm:whitespace-nowrap cursor-pointer transition-colors w-full"
      >
        GARANTIR MINHA VAGA
      </button>
    </form>
  );
};
