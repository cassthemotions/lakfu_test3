import React, { Component } from 'react';
import { css } from 'glamor'

class Entrepreneur extends Component {
  render() {
    const { entrepreneurs } = this.props
    return (
      <div {...css(styles.container)}>
        {
          resturants.length === Number(0) && (
            <h1
              {...css(styles.h1)}
            >Create your first Entrepreneur by clicking +</h1>
          )
        }
        {
          resturants.map((r, i) => (
            <div key={i}>
              <p {...css(styles.subtitle)}>{r.firstName}</p>
              <p {...css(styles.subtitle)}>{r.lastName}</p>
              <p {...css(styles.subtitle)}>{r.email}</p>
              <p {...css(styles.subtitle)}>{r.password}</p>
              <p {...css(styles.subtitle)}>{r.jobPosition}</p>
            </div>
          )
        )
      }
        </div>
      );
    }
  }

export default Entrepreneur
