// import AWS from 'aws-sdk'
// import debug from 'debug'
// const logger = debug('email-utility:ses')
//
// const route53domains = new AWS.Route53Domains({apiVersion: '2014-05-15', region: 'us-west-2'})
// const ses = new AWS.SESV2({apiVersion: '2019-09-27', region: 'us-west-2'})
//
// export async function ensureRoute53DomainResourcesExist() {
//   return route53domains.listDomains().promise()
// }
//
// ensureRoute53DomainResourcesExist()
//   .then(res => console.log('RESULT:', res))
//   .catch(console.error)
