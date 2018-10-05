import * as Time from "./lib/Time"
const BRO_TS_FORMAT = "X.SSSSSS"

export function toDate(string) {
  return Time.moment(string, BRO_TS_FORMAT).toDate()
}

export function toInt(string) {
  return parseInt(string)
}

export function toTs(date) {
  return Time.moment(date).format(BRO_TS_FORMAT)
}

export function toSec(date) {
  return Time.moment(date).unix()
}

export const toMoment = ({sec, ns}) => {
  return Time.moment(sec + "." + ns, BRO_TS_FORMAT)
}

export const fromNanoTsToDate = ts => new Date(ts / 1000000.0)

export const fromNanoTsToMoment = ts => Time.moment(fromNanoTsToDate(ts))