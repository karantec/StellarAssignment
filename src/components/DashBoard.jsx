import React from "react";
import { Sidebar } from "./Sidebaar";
import Nav from "./Nav";
import Buttons from "./Buttons";
import Card from "./Card";
import { Table } from "./Table";
import InfoCard from "./InfoCard";
function DashBoard() {
  return (
    <>
      <div className="flex flex-1 gap-2">
        <Sidebar />
        <div className="flex flex-col h-full">
          <Nav />
          <Buttons/>
          <InfoCard/>
          <Card/>
          <Table/>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
