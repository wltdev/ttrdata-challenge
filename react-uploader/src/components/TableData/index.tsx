import { FC } from "react";
import { Table, Td, Th } from "./styles";

type Item = {
  old?: string[];
  new?: string[];
};
type Props = {
  header: string[];
  data: Item[];
};

export const TableData: FC<Props> = ({ header, data }) => {
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
                  <Td>Old Value</Td>
                  {item.old?.map((oldCell, cellIndex) => (
                    <Td key={cellIndex}>{oldCell}</Td>
                  ))}
                </tr>
              </>
            )}

            {item.new && item.new.length > 0 && (
              <>
                <tr>
                  <Td>New Value</Td>
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
