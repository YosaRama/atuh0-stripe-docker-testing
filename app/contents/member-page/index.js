// Libs
import { Avatar, Button, Card, Col, Row } from "antd";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

// Components
import AppContainersMain from "app/components/containers/main";

// Styles
import s from "./index.module.scss";

// Icons
import { ArrowLeftOutlined } from "@ant-design/icons";

function AppContentsMemberPage() {
  const { data: session } = useSession();
  const router = useRouter();

  //? ============== Handle Logout ============= ?//
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };
  // * ====================================== * //

  return (
    <>
      <AppContainersMain>
        <section className="mainSection">
          <Col span={12}>
            <Link href={"/"}>
              <a>
                <span style={{ marginRight: 10 }}>
                  <ArrowLeftOutlined />
                </span>
                Back To Public Page
              </a>
            </Link>
            <Card style={{ marginTop: 10 }}>
              <Row gutter={[16, 0]} className={s.profileContainer}>
                <Col span={4}>
                  <Avatar
                    src={`${
                      session?.user?.image
                        ? session?.user?.image
                        : "/images/profile-default.png"
                    }`}
                    className={s.avatar}
                  />
                </Col>
                <Col className={s.details}>
                  <div>
                    <Col span={24}>
                      <h1>
                        Name :{" "}
                        {session?.user?.name ? session?.user?.name : "Guest"}
                      </h1>
                    </Col>
                    <Col span={24}>
                      <h3>
                        Email :{" "}
                        {session?.user?.email
                          ? session?.user?.email
                          : "guest@gmail.com"}
                      </h3>
                    </Col>
                  </div>
                </Col>
              </Row>
            </Card>
            <Col span={24}>
              <Row gutter={[16, 0]} justify="center">
                <Col span={6} className={s.btn}>
                  <Button type="danger" onClick={handleLogout}>
                    Logout
                  </Button>
                </Col>
                <Col span={6} className={s.btn}>
                  <Button
                    type="primary"
                    onClick={() => router.push("/api/member-only")}
                  >
                    Make Request API
                  </Button>
                </Col>
              </Row>
            </Col>
          </Col>
        </section>
      </AppContainersMain>
    </>
  );
}

export default AppContentsMemberPage;
