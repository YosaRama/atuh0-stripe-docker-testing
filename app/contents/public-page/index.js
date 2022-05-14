// Libs
import { useRouter } from "next/router";
import { Button, Col } from "antd";
import { useSession, signIn } from "next-auth/react";

// Components
import AppContainersMain from "app/components/containers/main";
import AppCheckoutForm from "app/components/libs/checkout-form";

// Styles
import s from "./index.module.scss";

function AppContentsPublicPage() {
  const { data: session } = useSession();
  const router = useRouter();

  //? ============== Handle Login ============= ?//
  const handleSignInAuth0 = () => {
    signIn("auth0", { redirect: false, callbackUrl: "/member-page" });
  };
  // * ====================================== * //

  //? ============== Handle Go to Member ============= ?//
  const handleGoToMemberPage = () => {
    router.push("/member-page");
  };
  // * ====================================== * //

  return (
    <>
      <AppContainersMain>
        <section className="mainSection">
          <Col span={24} className={s.container}>
            <Col span={24}>
              <h1>PUBLIC PAGE</h1>
            </Col>
            {!session && (
              <>
                <Col span={6} className={s.btn}>
                  <Button type="primary" onClick={handleSignInAuth0}>
                    Login
                  </Button>
                </Col>
                <Col span={6} className={s.btn}>
                  <Button type="primary" onClick={handleSignInAuth0}>
                    Sign Up
                  </Button>
                </Col>
                <Col span={6} className={s.btn}>
                  <Button type="default" onClick={handleGoToMemberPage}>
                    Go to Member As Guest
                  </Button>
                </Col>
              </>
            )}
            {session && (
              <>
                <h3>Hi {session?.user?.name}</h3>
                <Col span={6} className={s.btn}>
                  <Button
                    style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    type="ghost"
                    onClick={handleGoToMemberPage}
                  >
                    Go To Member Page
                  </Button>
                </Col>
                <Col span={6} className={s.btn}>
                  <AppCheckoutForm />
                </Col>
              </>
            )}
          </Col>
        </section>
      </AppContainersMain>
    </>
  );
}

export default AppContentsPublicPage;
