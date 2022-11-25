import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Logo from "../components/logo"
import Header from "../components/header"

const CategoryPost = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div className="display-row">
        <Logo />
        <Header />
      </div>
      <Seo title={`카테고리명`} /> {/* 페이지 title 수정 */}
      {/* <Bio /> */}
      <h3>{`카테고리명`}</h3> {/* 현재 카테고리 표시 */}
      <div>게시글 없음</div>
    </Layout>
  )
}

export default CategoryPost
