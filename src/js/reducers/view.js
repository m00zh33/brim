/* @flow */

import createReducer from "./createReducer"

const ANALYTICS = "analytics"
const LOGS = "logs"

type StateSlice = {
  leftSidebarIsOpen: boolean,
  rightSidebarIsOpen: boolean,
  downloadsIsOpen: boolean,
  leftSidebarWidth: number,
  rightSidebarWidth: number,
  resultsTab: "analytics" | "logs" | null,
  timeZone: string
}
type State = {view: StateSlice}

export const initalState: StateSlice = {
  leftSidebarIsOpen: false,
  rightSidebarIsOpen: false,
  downloadsIsOpen: false,
  leftSidebarWidth: 350,
  rightSidebarWidth: 350,
  resultsTab: null,
  timeZone: "UTC"
}

export default createReducer(initalState, {
  LEFT_SIDEBAR_SHOW: state => ({
    ...state,
    leftSidebarIsOpen: true
  }),
  LEFT_SIDEBAR_HIDE: state => ({
    ...state,
    leftSidebarIsOpen: false
  }),
  RIGHT_SIDEBAR_SHOW: state => ({
    ...state,
    rightSidebarIsOpen: true
  }),
  RIGHT_SIDEBAR_HIDE: state => ({
    ...state,
    rightSidebarIsOpen: false
  }),
  LEFT_SIDEBAR_TOGGLE: state => ({
    ...state,
    leftSidebarIsOpen: !state.leftSidebarIsOpen
  }),
  RIGHT_SIDEBAR_TOGGLE: state => ({
    ...state,
    rightSidebarIsOpen: !state.rightSidebarIsOpen
  }),
  SHOW_LOGS_TAB: state => ({
    ...state,
    resultsTab: LOGS
  }),
  SHOW_ANALYTICS_TAB: state => ({
    ...state,
    resultsTab: ANALYTICS
  }),
  TIME_ZONE_SET: (state, {timeZone}) => ({
    ...state,
    timeZone
  }),
  RIGHT_SIDEBAR_WIDTH_SET: (state, {width}) => ({
    ...state,
    rightSidebarWidth: width
  }),
  LEFT_SIDEBAR_WIDTH_SET: (state, {width}) => ({
    ...state,
    leftSidebarWidth: width
  }),
  DOWNLOADS_SHOW: state => ({
    ...state,
    downloadsIsOpen: true
  }),
  DOWNLOADS_HIDE: state => ({
    ...state,
    downloadsIsOpen: false
  })
})

export const getRightSidebarWidth = (state: State) =>
  state.view.rightSidebarWidth

export const getLeftSidebarWidth = (state: State) => state.view.leftSidebarWidth

export const getLeftSidebarIsOpen = (state: State) =>
  state.view.leftSidebarIsOpen

export const getRightSidebarIsOpen = (state: State) =>
  state.view.rightSidebarIsOpen

export const getDownloadsIsOpen = (state: State) => state.view.downloadsIsOpen

export const getShowAnalyticsTab = (state: State) =>
  state.view.resultsTab === ANALYTICS

export const getShowLogsTab = (state: State) => state.view.resultsTab === LOGS

export const getTimeZone = (state: State) => state.view.timeZone