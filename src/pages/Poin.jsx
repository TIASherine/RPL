import PageHeader from "../components/PageHeader";
import ErrorPage from "../components/ErrorPage";
import { useState } from "react";

export default function Poin() {
  return (
    <div>
      <PageHeader
        title="Poin"
        breadcrumb="Poin"
        children="Add Poin"
        onClick={() => setShowContent((prev) => !prev)}
      >
      </PageHeader>

      <div>
        <ErrorPage code="404" desc="Tidak Tersedia" />
      </div>
    </div>
  );
}