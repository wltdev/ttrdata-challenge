import { FC } from "react";
import { Table, Td, Th } from "./styles";

type Item = {
  old?: string[];
  new?: string[];
};
type Props = {
  header: string[];
  data: Item[];
  newLines?: boolean;
};

export const TableData: FC<Props> = ({ header, data, newLines }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th></Th>
          {header.map((headerItem, index) => (
            <Th key={index}>{headerItem}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <>
            {item.old && item.old.length > 0 && (
              <>
                <tr>
                  <Td>Old line: {index + 1}</Td>
                  {item.old?.map((oldCell, cellIndex) => (
                    <Td key={cellIndex}>{oldCell}</Td>
                  ))}
                </tr>
              </>
            )}

            {item.new && item.new.length > 0 && (
              <>
                <tr>
                  <Td>
                    {newLines ? "New line: " : "Updated line: "}
                    {index + 1}
                  </Td>
                  {item.new?.map((newCell, cellIndex) => (
                    <Td
                      key={cellIndex}
                      className={
                        item.old &&
                        item.old[cellIndex] &&
                        newCell !== item.old[cellIndex]
                          ? "different"
                          : ""
                      }
                    >
                      {newCell}
                    </Td>
                  ))}
                </tr>
              </>
            )}
          </>
        ))}
      </tbody>
    </Table>
  );
};
