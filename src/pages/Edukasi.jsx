import PageHeader from "../components/PageHeader";
import ErrorPage from "../components/ErrorPage";
import { useState } from "react";

export default function Edukasi() {
  return (
    <div>
      <PageHeader
        breadcrumb="Edukasi"
      ></PageHeader>

      <div>
        <ErrorPage code="404" desc="Tidak Tersedia" />
      </div>
    </div>
  );
}
