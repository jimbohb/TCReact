import "./styles.css";

import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

const TestDocument = {
  ID: "0",
  Category: "Document",
  Text: "Test Specification for the Product Under Test",
  Contains: [
    {
      ID: "1000",
      Category: "Heading",
      Text: "Test Environment",
      Contains: [
        {
          ID: "1001",
          Category: "Comment",
          Text: "Use the simulator for this test!"
        }
      ]
    },
    {
      ID: "1003",
      Category: "Heading",
      Text: "Test Cases",
      Contains: [
        {
          ID: "1004",
          Category: "Heading",
          Text: "Test Case Gruppe 1",
          Contains: [
            {
              ID: "1005",
              Category: "Test Case",
              Text: "TODO:Test case description"
            },
            {
              ID: "1006",
              Category: "Test Case",
              Text: "TODO:Test case description"
            },
            {
              ID: "1007",
              Category: "Test Case",
              Text: "TODO:Test case description"
            }
          ]
        },
        {
          ID: "1008",
          Category: "Heading",
          Text: "Test Case Gruppe 2",
          Contains: [
            {
              ID: "1009",
              Category: "Test Case",
              Text: "TODO:Test case description"
            },
            {
              ID: "1010",
              Category: "Test Case",
              Text: "TODO:Test case description"
            }
          ]
        }
      ]
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <h1>Test Cases Layout</h1>
      <MainTable />
    </div>
  );
}

function TestDocumentTreeView() {
  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.ID}
      nodeId={nodes.ID}
      label={nodes.Category + " - " + nodes.Text}
      sx={{ textAlign: "left" }}
    >
      {Array.isArray(nodes.Contains)
        ? nodes.Contains.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["0"]}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 500, flexGrow: 1, overflowY: "auto" }}
    >
      {renderTree(TestDocument)}
    </TreeView>
  );
}

function MainTable() {
  return (
    <table className="main">
      <thead>
        <tr>
          <th className="TreeView">Tree view</th>
          <th className="TestCaseView">Test Case view</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="TreeView">
            <TestDocumentTreeView />
          </td>
          <td className="TestCaseView">Test Case view content</td>
        </tr>
      </tbody>
    </table>
  );
}
