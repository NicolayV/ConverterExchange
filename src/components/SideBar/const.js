import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";

export const navbarListItems = [
  {
    id: 0,
    icon: <CurrencyExchangeIcon />,
    label: "Конвертер валюты",
    route: "converter",
  },
  {
    id: 1,
    icon: <AlignVerticalBottomIcon />,
    label: "Актуальные курсы валют",
    route: "exchange",
  },
];
