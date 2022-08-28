import { GetServerSideProps } from "next";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import spotifyLogo from "../assets/spotify-logo.png";

interface Props {
  providers: Awaited<ReturnType<typeof getProviders>>;
}

const Login = ({ providers }: Props) => {
  const { name: providerName, id: providerID } =
    providers?.spotify as ClientSafeProvider;

  return (
    <div className="flex flex-col justify-center bg-black h-screen">
      <div className="mb-6">
        <Image src={spotifyLogo} alt="Spotify" height="200px" width="200px" />

        <button
          className="bg-[#18d860] text-white p-5 rounded-full"
          onClick={() => {
            signIn(providerID, { callbackUrl: "/" });
          }}
        >
          Login with {providerName}
        </button>
      </div>
    </div>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
