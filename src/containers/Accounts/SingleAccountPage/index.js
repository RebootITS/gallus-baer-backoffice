import React, { useState, useEffect } from "react";
import { Row, Col, Breadcrumb, Tabs, Tab } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ContactInfoCard from "components/ContactInfoCard";
import ProfileIcon from "components/ProfileIcon";
import AccountLabel from "components/AccountLabel";
import Property from "components/PropertyCard";
import AccountHistory from "components/AccountHistory";
import NotFoundProperty from "components/NotFoundProperty";

import BackgroundImage from "stories/assets/account-background.jpg";

import "./styles.scss";

import data from "../accounts.json";

const SingleAccountPage = () => {
  const { id } = useParams();
  const [accountData, setAccountData] = useState(null);

  useEffect(() => {
    const singleAccount = data.filter((account) => account.id === Number(id));

    setAccountData(singleAccount[0]);
  }, []);

  return (
    <>
      {accountData ? (
        <Row className="pt-3">
          <Col
            sm={12}
            className="pt-3 pb-4 account-banner w-100"
            style={{
              background: `url(${BackgroundImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h3>Accounts</h3>
            <Breadcrumb className="mb-4">
              <Breadcrumb.Item>
                <Link to={"/accounts"}>
                  <p>Account</p>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="breadcrumb-active-link">
                {accountData.account.name}
              </Breadcrumb.Item>
            </Breadcrumb>

            <div className="d-flex align-items-center">
              <ProfileIcon
                name={accountData.account.name}
                surname={accountData.account.surname}
                image={accountData.account.img}
              />

              <div className="d-flex flex-column ms-4">
                <h4>
                  {accountData.account.name} {accountData.account.surname}
                </h4>
                <p className="link">{accountData.account.email[0]}</p>
              </div>

              <AccountLabel
                role={accountData.account.role}
                className={"ms-4"}
              />
            </div>
          </Col>

          <Col sm={12} className="mt-4">
            <Row>
              <Col sm={12} md={9}>
                <Tabs
                  defaultActiveKey="my-properties"
                  id="uncontrolled-tab-example"
                  className="mt-2"
                >
                  <Tab
                    eventKey="my-properties"
                    title="My properties"
                    tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
                  >
                    <Row className="gy-4 mt-2">
                      {accountData.account.properties.length === 0 ? (
                        <>
                          {" "}
                          <Col sm={12} md={1}></Col>{" "}
                          <Col sm={12} md={6}>
                            <NotFoundProperty
                              title={"Not found"}
                              subtitle={
                                "There are no associated properties with this account at the moment."
                              }
                            />
                          </Col>{" "}
                        </>
                      ) : (
                        accountData.account.properties.map(
                          ({ id, property }) => (
                            <Col key={id} sm={12} md={4}>
                              <Property
                                property={property}
                                user={accountData.account}
                                id={id}
                              />
                            </Col>
                          )
                        )
                      )}
                    </Row>
                  </Tab>

                  <Tab
                    eventKey="saved-properties"
                    title="Saved properties"
                    tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
                  >
                    <Row className="gy-4 mt-2">
                      {accountData.account.properties.length === 0 ? (
                        <>
                          {" "}
                          <Col sm={12} md={1}></Col>{" "}
                          <Col sm={12} md={6}>
                            <NotFoundProperty
                              title={"Not found"}
                              subtitle={
                                "There are no associated properties with this account at the moment."
                              }
                            />
                          </Col>{" "}
                        </>
                      ) : (
                        accountData.account.properties.map(
                          ({ id, property }) => (
                            <Col key={id} sm={12} md={4}>
                              <Property
                                property={property}
                                user={accountData.account}
                                id={id}
                              />
                            </Col>
                          )
                        )
                      )}
                    </Row>
                  </Tab>
                </Tabs>

                <Row className="mt-4 pt-2">
                  <Col>
                    <AccountHistory account={accountData.account} />
                  </Col>
                </Row>
              </Col>

              <Col sm={12} md={3}>
                <ContactInfoCard
                  phoneNumbers={accountData.account.phone}
                  emails={accountData.account.email}
                  className={"sticky-top contact-info-sticky"}
                  img={accountData.account.img}
                  name={accountData.account.name}
                  surname={accountData.account.surname}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default SingleAccountPage;
