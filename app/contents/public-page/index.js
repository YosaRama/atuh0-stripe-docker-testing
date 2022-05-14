// Libs
import { Button, Col } from "antd";

// Components
import AppContainersMain from "app/components/containers/main";

// Styles
import s from "./index.module.scss";

function AppContentsPublicPage() {
  return (
    <>
      <AppContainersMain>
        <section className={s.section}>
          <Col span={24} className={s.container}>
            <Col span={24}>
              <h1>PUBLIC PAGE</h1>
            </Col>
            <Col span={6} className={s.btn}>
              <Button type="primary">Login</Button>
            </Col>
            <Col span={6} className={s.btn}>
              <Button type="primary">Sign Up</Button>
            </Col>
          </Col>
        </section>
      </AppContainersMain>
    </>
  );
}

export default AppContentsPublicPage;
