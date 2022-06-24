import { gql, useMutation } from "@apollo/client";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputComponent } from "../InputComponent";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

const PUBLISH_SUBSCRIBER = gql`
  mutation PublishSubscriber($email: String!) {
    publishSubscriber(where: { email: $email }) {
      id
    }
  }
`;

export const SubscribeFormComponent: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { data, loading: createLoad }] = useMutation<{
    id: string;
  }>(CREATE_SUBSCRIBER_MUTATION);
  const [publishSubscriber, { loading: publishLoad }] = useMutation<{
    subscriberId: string;
  }>(PUBLISH_SUBSCRIBER);
  const navigate = useNavigate();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  };

  useEffect(() => {
    data &&
      publishSubscriber({
        variables: {
          email: email,
        },
      });
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
