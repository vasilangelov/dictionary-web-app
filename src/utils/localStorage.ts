import { LocalStorageKey } from "@/constants/localStorage";
import { Theme } from "@/constants/theme";

const LOCAL_STORAGE_MAPPER = {
  [LocalStorageKey.Theme]: {
    serialize: (value: Theme) => value,
    deserialize: (value) =>
      value === Theme.Light || value === Theme.Dark ? value : undefined,
  },
} satisfies Record<
  LocalStorageKey,
  {
    serialize: (value: never) => string;
    deserialize: (value: string) => unknown;
  }
>;

export const getLocalStorageItem = <Key extends LocalStorageKey>(
  key: Key
):
  | ReturnType<(typeof LOCAL_STORAGE_MAPPER)[Key]["deserialize"]>
  | undefined => {
  const item = localStorage.getItem(key);

  if (item === null) {
    return;
  }

  return LOCAL_STORAGE_MAPPER[key].deserialize(item) as ReturnType<
    (typeof LOCAL_STORAGE_MAPPER)[Key]["deserialize"]
  >;
};

export const setLocalStorageItem = <Key extends LocalStorageKey>(
  key: Key,
  value: Parameters<(typeof LOCAL_STORAGE_MAPPER)[Key]["serialize"]>["0"]
) => {
  localStorage.setItem(key, LOCAL_STORAGE_MAPPER[key].serialize(value));
};
