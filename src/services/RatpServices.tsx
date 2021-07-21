import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const getAll = ({
  query = "",
  rowsPerPage = 10,
  page = 0,
}) => axios(`${process.env.REACT_APP_RATP_API_KEY}&q=${query}&rows=${rowsPerPage}&start=${page}`)
  .then(
    (result: { data: any; }) => {
     return  result.data.records
    }
  )
