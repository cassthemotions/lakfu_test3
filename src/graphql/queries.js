/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEntrepreneur = `query GetEntrepreneur($id: ID!) {
  getEntrepreneur(id: $id) {
    id
    firstName
    lastName
    email
    password
    connection {
      id
      firstName
      lastName
      email
      connection {
        id
        firstName
        lastName
        email
        ... on Entrepreneur {
          password
          jobPosition
          owner
        }
        ... on Investor {
          jobPosition
          company
          owner
        }
      }
      ... on Entrepreneur {
        password
        jobPosition
        company {
          id
          companyName
          ... on Startup {
            market
            description
            industry
            pitchDeck
            financialEstimate
            employeeNumber
            amountRaised
            equityToGiveUp
            SECRegistered
            SECRegNumber
            stage
            revenue
            owner
          }
          ... on Investors {
            partnerYearsOfExperience
            description
            maximumDealSize
            industry
            employeeNumber
            SECRegistered
            SECRegNumber
            requiredRevenue
            requiredEBITDA
            targetCompanyStage
            requiredPatent
            owner
          }
        }
        education {
          id
          educationName
          educationYear
          educationDegree
          educationMajor
        }
        userLocation {
          city
          state
          country
        }
        owner
      }
      ... on Investor {
        jobPosition
        company
        education {
          id
          educationName
          educationYear
          educationDegree
          educationMajor
        }
        userLocation {
          city
          state
          country
        }
        owner
      }
    }
    jobPosition
    company {
      id
      companyName
      companyLocation {
        city
        state
        country
      }
      ... on Startup {
        market
        description
        industry
        pitchDeck
        financialEstimate
        patent {
          patentID
          type
        }
        employeeNumber
        amountRaised
        equityToGiveUp
        SECRegistered
        SECRegNumber
        team {
          id
          firstName
          lastName
          email
          ... on Entrepreneur {
            password
            jobPosition
            owner
          }
          ... on Investor {
            jobPosition
            company
            owner
          }
        }
        stage
        revenue
        owner
      }
      ... on Investors {
        partnerYearsOfExperience
        description
        fund {
          fundID
          fundName
          fundSize
          fundReturn
        }
        deal {
          dealAmount
        }
        maximumDealSize
        industry
        patent {
          patentID
          type
        }
        employeeNumber
        SECRegistered
        SECRegNumber
        team {
          id
          firstName
          lastName
          email
          ... on Entrepreneur {
            password
            jobPosition
            owner
          }
          ... on Investor {
            jobPosition
            company
            owner
          }
        }
        requiredRevenue
        requiredEBITDA
        targetCompanyStage
        requiredPatent
        owner
      }
    }
    education {
      id
      educationName
      educationYear
      educationDegree
      educationMajor
    }
    userLocation {
      city
      state
      country
    }
    owner
  }
}
`;
export const listEntrepreneurs = `query ListEntrepreneurs(
  $filter: ModelEntrepreneurFilterInput
  $limit: Int
  $nextToken: String
) {
  listEntrepreneurs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      password
      connection {
        id
        firstName
        lastName
        email
        ... on Entrepreneur {
          password
          jobPosition
          owner
        }
        ... on Investor {
          jobPosition
          company
          owner
        }
      }
      jobPosition
      company {
        id
        companyName
        ... on Startup {
          market
          description
          industry
          pitchDeck
          financialEstimate
          employeeNumber
          amountRaised
          equityToGiveUp
          SECRegistered
          SECRegNumber
          stage
          revenue
          owner
        }
        ... on Investors {
          partnerYearsOfExperience
          description
          maximumDealSize
          industry
          employeeNumber
          SECRegistered
          SECRegNumber
          requiredRevenue
          requiredEBITDA
          targetCompanyStage
          requiredPatent
          owner
        }
      }
      education {
        id
        educationName
        educationYear
        educationDegree
        educationMajor
      }
      userLocation {
        city
        state
        country
      }
      owner
    }
    nextToken
  }
}
`;
export const getInvestor = `query GetInvestor($id: ID!) {
  getInvestor(id: $id) {
    id
    firstName
    lastName
    email
    connection {
      id
      firstName
      lastName
      email
      connection {
        id
        firstName
        lastName
        email
        ... on Entrepreneur {
          password
          jobPosition
          owner
        }
        ... on Investor {
          jobPosition
          company
          owner
        }
      }
      ... on Entrepreneur {
        password
        jobPosition
        company {
          id
          companyName
          ... on Startup {
            market
            description
            industry
            pitchDeck
            financialEstimate
            employeeNumber
            amountRaised
            equityToGiveUp
            SECRegistered
            SECRegNumber
            stage
            revenue
            owner
          }
          ... on Investors {
            partnerYearsOfExperience
            description
            maximumDealSize
            industry
            employeeNumber
            SECRegistered
            SECRegNumber
            requiredRevenue
            requiredEBITDA
            targetCompanyStage
            requiredPatent
            owner
          }
        }
        education {
          id
          educationName
          educationYear
          educationDegree
          educationMajor
        }
        userLocation {
          city
          state
          country
        }
        owner
      }
      ... on Investor {
        jobPosition
        company
        education {
          id
          educationName
          educationYear
          educationDegree
          educationMajor
        }
        userLocation {
          city
          state
          country
        }
        owner
      }
    }
    jobPosition
    company
    education {
      id
      educationName
      educationYear
      educationDegree
      educationMajor
    }
    userLocation {
      city
      state
      country
    }
    owner
  }
}
`;
export const listInvestors = `query ListInvestors(
  $filter: ModelInvestorFilterInput
  $limit: Int
  $nextToken: String
) {
  listInvestors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      connection {
        id
        firstName
        lastName
        email
        ... on Entrepreneur {
          password
          jobPosition
          owner
        }
        ... on Investor {
          jobPosition
          company
          owner
        }
      }
      jobPosition
      company
      education {
        id
        educationName
        educationYear
        educationDegree
        educationMajor
      }
      userLocation {
        city
        state
        country
      }
      owner
    }
    nextToken
  }
}
`;
export const getStartup = `query GetStartup($id: ID!) {
  getStartup(id: $id) {
    id
    companyName
    companyLocation {
      city
      state
      country
    }
    market
    description
    industry
    pitchDeck
    financialEstimate
    patent {
      patentID
      type
    }
    employeeNumber
    amountRaised
    equityToGiveUp
    SECRegistered
    SECRegNumber
    team {
      id
      firstName
      lastName
      email
      connection {
        id
        firstName
        lastName
        email
        ... on Entrepreneur {
          password
          jobPosition
          owner
        }
        ... on Investor {
          jobPosition
          company
          owner
        }
      }
      ... on Entrepreneur {
        password
        jobPosition
        company {
          id
          companyName
          ... on Startup {
            market
            description
            industry
            pitchDeck
            financialEstimate
            employeeNumber
            amountRaised
            equityToGiveUp
            SECRegistered
            SECRegNumber
            stage
            revenue
            owner
          }
          ... on Investors {
            partnerYearsOfExperience
            description
            maximumDealSize
            industry
            employeeNumber
            SECRegistered
            SECRegNumber
            requiredRevenue
            requiredEBITDA
            targetCompanyStage
            requiredPatent
            owner
          }
        }
        education {
          id
          educationName
          educationYear
          educationDegree
          educationMajor
        }
        userLocation {
          city
          state
          country
        }
        owner
      }
      ... on Investor {
        jobPosition
        company
        education {
          id
          educationName
          educationYear
          educationDegree
          educationMajor
        }
        userLocation {
          city
          state
          country
        }
        owner
      }
    }
    stage
    revenue
    owner
  }
}
`;
export const listStartups = `query ListStartups(
  $filter: ModelStartupFilterInput
  $limit: Int
  $nextToken: String
) {
  listStartups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      companyName
      companyLocation {
        city
        state
        country
      }
      market
      description
      industry
      pitchDeck
      financialEstimate
      patent {
        patentID
        type
      }
      employeeNumber
      amountRaised
      equityToGiveUp
      SECRegistered
      SECRegNumber
      team {
        id
        firstName
        lastName
        email
        ... on Entrepreneur {
          password
          jobPosition
          owner
        }
        ... on Investor {
          jobPosition
          company
          owner
        }
      }
      stage
      revenue
      owner
    }
    nextToken
  }
}
`;
export const getInvestors = `query GetInvestors($id: ID!) {
  getInvestors(id: $id) {
    id
    companyName
    companyLocation {
      city
      state
      country
    }
    partnerYearsOfExperience
    description
    fund {
      fundID
      fundName
      fundSize
      fundReturn
    }
    deal {
      dealCompany {
        id
        companyName
        ... on Startup {
          market
          description
          industry
          pitchDeck
          financialEstimate
          employeeNumber
          amountRaised
          equityToGiveUp
          SECRegistered
          SECRegNumber
          stage
          revenue
          owner
        }
        ... on Investors {
          partnerYearsOfExperience
          description
          maximumDealSize
          industry
          employeeNumber
          SECRegistered
          SECRegNumber
          requiredRevenue
          requiredEBITDA
          targetCompanyStage
          requiredPatent
          owner
        }
      }
      dealAmount
    }
    maximumDealSize
    industry
    patent {
      patentID
      type
    }
    employeeNumber
    SECRegistered
    SECRegNumber
    team {
      id
      firstName
      lastName
      email
      connection {
        id
        firstName
        lastName
        email
        ... on Entrepreneur {
          password
          jobPosition
          owner
        }
        ... on Investor {
          jobPosition
          company
          owner
        }
      }
      ... on Entrepreneur {
        password
        jobPosition
        company {
          id
          companyName
          ... on Startup {
            market
            description
            industry
            pitchDeck
            financialEstimate
            employeeNumber
            amountRaised
            equityToGiveUp
            SECRegistered
            SECRegNumber
            stage
            revenue
            owner
          }
          ... on Investors {
            partnerYearsOfExperience
            description
            maximumDealSize
            industry
            employeeNumber
            SECRegistered
            SECRegNumber
            requiredRevenue
            requiredEBITDA
            targetCompanyStage
            requiredPatent
            owner
          }
        }
        education {
          id
          educationName
          educationYear
          educationDegree
          educationMajor
        }
        userLocation {
          city
          state
          country
        }
        owner
      }
      ... on Investor {
        jobPosition
        company
        education {
          id
          educationName
          educationYear
          educationDegree
          educationMajor
        }
        userLocation {
          city
          state
          country
        }
        owner
      }
    }
    requiredRevenue
    requiredEBITDA
    targetCompanyStage
    requiredPatent
    owner
  }
}
`;
export const listInvestorss = `query ListInvestorss(
  $filter: ModelInvestorsFilterInput
  $limit: Int
  $nextToken: String
) {
  listInvestorss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      companyName
      companyLocation {
        city
        state
        country
      }
      partnerYearsOfExperience
      description
      fund {
        fundID
        fundName
        fundSize
        fundReturn
      }
      deal {
        dealAmount
      }
      maximumDealSize
      industry
      patent {
        patentID
        type
      }
      employeeNumber
      SECRegistered
      SECRegNumber
      team {
        id
        firstName
        lastName
        email
        ... on Entrepreneur {
          password
          jobPosition
          owner
        }
        ... on Investor {
          jobPosition
          company
          owner
        }
      }
      requiredRevenue
      requiredEBITDA
      targetCompanyStage
      requiredPatent
      owner
    }
    nextToken
  }
}
`;
