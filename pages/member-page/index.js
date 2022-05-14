// Libs
import { getSession } from "next-auth/react";

// Contents
import AppContentsMemberPage from "app/contents/member-page";

function MemberPage() {
  return (
    <>
      <AppContentsMemberPage />
    </>
  );
}

export default MemberPage;
