/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEntrepreneur = `mutation CreateEntrepreneur($input: CreateEntrepreneurInput!) {
  createEntrepreneur(input: $input) {
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
export const updateEntrepreneur = `mutation UpdateEntrepreneur($input: UpdateEntrepreneurInput!) {
  updateEntrepreneur(input: $input) {
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
export const deleteEntrepreneur = `mutation DeleteEntrepreneur($input: DeleteEntrepreneurInput!) {
  deleteEntrepreneur(input: $input) {
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
export const createInvestor = `mutation CreateInvestor($input: CreateInvestorInput!) {
  createInvestor(input: $input) {
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
export const updateInvestor = `mutation UpdateInvestor($input: UpdateInvestorInput!) {
  updateInvestor(input: $input) {
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
export const deleteInvestor = `mutation DeleteInvestor($input: DeleteInvestorInput!) {
  deleteInvestor(input: $input) {
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
export const createStartup = `mutation CreateStartup($input: CreateStartupInput!) {
  createStartup(input: $input) {
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
export const updateStartup = `mutation UpdateStartup($input: UpdateStartupInput!) {
  updateStartup(input: $input) {
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
export const deleteStartup = `mutation DeleteStartup($input: DeleteStartupInput!) {
  deleteStartup(input: $input) {
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
export const createInvestors = `mutation CreateInvestors($input: CreateInvestorsInput!) {
  createInvestors(input: $input) {
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
export const updateInvestors = `mutation UpdateInvestors($input: UpdateInvestorsInput!) {
  updateInvestors(input: $input) {
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
export const deleteInvestors = `mutation DeleteInvestors($input: DeleteInvestorsInput!) {
  deleteInvestors(input: $input) {
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
