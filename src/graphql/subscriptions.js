/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEntrepreneur = `subscription OnCreateEntrepreneur($owner: String!) {
  onCreateEntrepreneur(owner: $owner) {
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
export const onUpdateEntrepreneur = `subscription OnUpdateEntrepreneur($owner: String!) {
  onUpdateEntrepreneur(owner: $owner) {
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
export const onDeleteEntrepreneur = `subscription OnDeleteEntrepreneur($owner: String!) {
  onDeleteEntrepreneur(owner: $owner) {
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
export const onCreateInvestor = `subscription OnCreateInvestor($owner: String!) {
  onCreateInvestor(owner: $owner) {
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
export const onUpdateInvestor = `subscription OnUpdateInvestor($owner: String!) {
  onUpdateInvestor(owner: $owner) {
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
export const onDeleteInvestor = `subscription OnDeleteInvestor($owner: String!) {
  onDeleteInvestor(owner: $owner) {
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
export const onCreateStartup = `subscription OnCreateStartup($owner: String!) {
  onCreateStartup(owner: $owner) {
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
export const onUpdateStartup = `subscription OnUpdateStartup($owner: String!) {
  onUpdateStartup(owner: $owner) {
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
export const onDeleteStartup = `subscription OnDeleteStartup($owner: String!) {
  onDeleteStartup(owner: $owner) {
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
export const onCreateInvestors = `subscription OnCreateInvestors($owner: String!) {
  onCreateInvestors(owner: $owner) {
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
export const onUpdateInvestors = `subscription OnUpdateInvestors($owner: String!) {
  onUpdateInvestors(owner: $owner) {
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
export const onDeleteInvestors = `subscription OnDeleteInvestors($owner: String!) {
  onDeleteInvestors(owner: $owner) {
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
