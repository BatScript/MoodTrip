import Head from 'next/head'
import React from 'react'

const MoodTripHeader = ({}) => {
  return (
    <Head>
      <title>{ogTitle}</title>
      {indexAndFollow && <meta content='index, follow' name='robots'></meta>}
      {pageView && <meta id='pageview' data-value={pageView} />}
      {description && <meta name='description' content={description} />}
      {ogTitle && <meta property='og:title' content={ogTitle} />}
      {ogTwitterTitle && <meta name='twitter:title' content={ogTwitterTitle} />}
      {twitterCard && (
        <meta
          name='twitter:card'
          content={twitterCard || 'summary_large_image'}
        />
      )}
      {description && (
        <>
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
        </>
      )}
      {ogImage && <meta property='og:image' content={ogImage} />}
      {twitterImage && <meta name='twitter:image' content={twitterImage} />}
      <meta property='og:url' content={ogUrl} />
      <meta property='og:site_name' content='Lybrate' />
      <meta name='twitter:site' content='@Lybrate' />
    </Head>
  )
}

export default MoodTripHeader
