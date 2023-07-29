import { toast } from "react-toastify";
import { HomeContainer } from "./styles";

export default function Home() {
  const config_toaster = {
    autoClose: 4000,
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
  };

  return (
    <HomeContainer>
      <h1 className="font-title">TEST</h1>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <button
          id="teste"
          onClick={() =>
            toast.error(
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
              config_toaster
            )
          }
        >
          ERROR ALERT
        </button>
      </div>
    </HomeContainer>
  );
}
