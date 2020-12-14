export type JobList = {
  data: any,
  isLoading: boolean,
  error: boolean,
  nextPage: (pageLink: string) => void
}