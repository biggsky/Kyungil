export interface HoldersListProps {
  holdersList: Array<string>;
}

export interface HoldersWrapProps {
  holdersList: IholdersList[] | null;
}

export interface HoldersItemProps {
  index:number
  HoldersItem: string;
}
