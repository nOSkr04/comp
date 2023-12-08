function useUser() {
  return useSWR("/api/user", fetcher);
}

const { data, error } = useUser();
