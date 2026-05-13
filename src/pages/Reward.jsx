import PageHeader from "../components/PageHeader";
import ErrorPage from "../components/ErrorPage";
import { useState } from "react";

export default function Reward() {
  return (
    <div>
      <PageHeader
        title="Reward"
        breadcrumb="Reward"
        children="Add Reward"
        onClick={() => setShowContent((prev) => !prev)}
      ></PageHeader>

      <div>
        <ErrorPage code="404" desc="Tidak Tersedia" />
      </div>
    </div>
  );
}
