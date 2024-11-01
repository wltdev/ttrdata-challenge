import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
  display: block;

  thead {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #515050;
  }

  @media (max-width: 768px) {
    thead {
      display: none; /* Hide header for small screens */
    }

    tr {
      display: block; /* Make each row a block */
      margin-bottom: 15px; /* Space between rows */
      border: 1px solid #ddd; /* Border for rows */
    }

    td {
      text-align: right; /* Align text to the right */
      position: relative; /* Position for labels */
      padding-left: 50%; /* Space for labels */
      display: block; /* Make cells block elements */
    }

    td:before {
      content: attr(data-label); /* Use data-label for headers */
      position: absolute; /* Position labels */
      left: 10px; /* Space from left */
      text-align: left; /* Align text to the left */
      font-weight: bold; /* Make labels bold */
    }
  }
`;

export const Th = styled.th`
  background-color: #646cff;
  color: #ddd;
  /* padding: 12px; */
  text-align: left;
  border: 1px solid #ddd;
`;

export const Td = styled.td`
  border: 1px solid #ddd;

  &.different {
    color: #646cff; /* Highlight different values */
  }
`;
