import PageHeader from "../components/PageHeader";
import ErrorPage from "../components/ErrorPage";
import { useState } from "react";

export default function Leaderboard() {
  return (
    <div>
      <PageHeader
        title="Leaderboard"
        breadcrumb="Leaderboard"
        children="Add Leaderboard"
        onClick={() => setShowContent((prev) => !prev)}
      >
      </PageHeader>

      <div>
        <ErrorPage code="404" desc="Tidak Tersedia" />
      </div>
    </div>
  );
}
