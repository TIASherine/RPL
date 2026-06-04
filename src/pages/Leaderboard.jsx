import PageHeader from "../components/PageHeader";
import ErrorPage from "../components/ErrorPage";
import { useState } from "react";

export default function Leaderboard() {
  return (
    <div>
      <PageHeader
        breadcrumb="Leaderboard"
      >
      </PageHeader>

      <div>
        <ErrorPage code="404" desc="Manda imut" />
      </div>
    </div>
  );
}
