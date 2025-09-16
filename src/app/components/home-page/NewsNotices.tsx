import Image from 'next/image'

const newsList = [
  { title: "Admission Open for B.Sc. Nursing and GNM Courses for Academic Year 2024-2025", date: "15 December 2024" },
  { title: "New Paramedical Courses Launched - DMLT, DMXT, and DAT Programs Now Available", date: "10 December 2024" },
  { title: "Enlight Group of Institutions Receives Recognition from INC & KNC", date: "05 December 2024" },
]

const noticeList = [
  { title: "Holiday Notice - Institution will remain closed on 25th December 2024", date: "20 December 2024" },
  { title: "Parent-Teacher Meeting scheduled for 30th December 2024", date: "18 December 2024" },
  { title: "Annual Sports Day will be held on 15th January 2025", date: "15 December 2024" },
]

export default function NewsNotices({ isClient }: { isClient: boolean }) {
  return (
    <div className="blogarea sp_bottom_70 sp_top_100">
      <div className="container">
        <div className="row aos-init" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
          <div className="col-xl-12">
            <div className="section__title text-center">
              <div className="section__title__button">
                <div className="default__small__button">News &amp; Notices</div>
              </div>
              <div className="section__title__heading">
                <h2>Latest News &amp; Notices</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* News Section */}
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="section__title__button d-flex justify-content-between align-items-center mb-4">
              <h3 className="h4">Latest News</h3>
              <a href="/news" className="btn btn-link p-0">View All News</a>
            </div>
            <div className="row">
              {newsList.map((news, index) => (
                <div key={index} className="col-lg-6 col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="bg-light p-2 rounded">
                            <Image 
                              src="/assets/img/icon/news-icon.svg" 
                              alt="News icon"
                              width={40}
                              height={40}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div>
                          <h5 className="h6 mb-1">
                            <a href="#" className="text-decoration-none">
                              {news.title}
                            </a>
                          </h5>
                          <p className="small text-muted mb-0">
                            <i className="far fa-calendar-alt me-1"></i> {news.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notices Section */}
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="section__title__button d-flex justify-content-between align-items-center mb-4">
              <h3 className="h4">Notices</h3>
              <a href="/notices" className="btn btn-link p-0">View All</a>
            </div>
            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                  {noticeList.map((notice, index) => (
                    <li key={index} className="list-group-item border-0 border-bottom">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="bg-light p-2 rounded">
                            <Image 
                              src="/assets/img/icon/notice-icon.svg" 
                              alt="Notice icon"
                              width={24}
                              height={24}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">
                            <a href="#" className="text-decoration-none">
                              {notice.title}
                            </a>
                          </h6>
                          <p className="small text-muted mb-0">
                            <i className="far fa-calendar-alt me-1"></i> {notice.date}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}