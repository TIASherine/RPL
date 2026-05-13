import PageHeader from "../components/PageHeader";
import ErrorPage from "../components/ErrorPage";
import { useState } from "react";

export default function Edukasi() {
  return (
    <div>
      <PageHeader
        title="Edukasi"
        breadcrumb="Edukasi"
        children="Add Edukasi"
        onClick={() => setShowContent((prev) => !prev)}
      ></PageHeader>

      <div>
        <ErrorPage code="404" desc="Tidak Tersedia" />
      </div>
    </div>
  );
}
