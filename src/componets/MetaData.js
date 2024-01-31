import { Helmet } from "react-helmet-async" //When Title us Assigned

export default function MetaData({ title }) {
  return (
    <div>
      <Helmet>
        <title>{`${title} - Arun Cart`}</title>
      </Helmet>
    </div>
  )
}


