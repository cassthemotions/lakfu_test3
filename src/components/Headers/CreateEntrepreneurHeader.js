import React from 'react'
import { css } from 'glamor'

const CreateEntrepreneurHeader = ({ showCreateEntrepreneur }) => {
  <div {...css(styles.header)}>
    <p {...css(styles.title)}>Entrepreneur</p>
    <div {...css(styles.iconContainer)}>
      <p {...css(styles.icon)} onClick={showCreateEntrepreneur}>+</p>
    </div>
  </div>
}

export default CreateEntrepreneurHeader
