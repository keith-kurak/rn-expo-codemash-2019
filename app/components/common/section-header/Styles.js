import { StyleSheet, Platform } from 'react-native';
import { colors, sizes } from '../../../config/common-styles';

export default StyleSheet.create({
  // *** Entire table ***

  table: {
    backgroundColor: colors.tableDeadSpace,
    flex: 1, // fill entire contents of container
  },
  // Message that appears in table when there's no items/ on error
  // not sure why I can't seem to center text vertically here
  noItemsMessage: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingLeft: 40,
    paddingRight: 40,
  },
  noItemsMessageText: {
    color: colors.secondaryText,
    textAlign: 'center',
  },

  // *** Section Header ***
  // Trying to implement material design guidelines for section headers:
  // https://material.io/guidelines/components/subheaders.html#

  sectionHeader: {
    // Seems odd: we need this background color to keep cells from bleeding behind the header
    backgroundColor: Platform.OS === 'ios' ? colors.tableDeadSpace : colors.tableDeadSpace,
    paddingTop: Platform.OS === 'ios' ? 10 : 15,
    // just a guess on the Android padding - it's large
    paddingBottom: Platform.OS === 'ios' ? 5 : 5,
    paddingLeft: sizes.small,
  },
  sectionHeaderText: {
    color: colors.secondaryText,
    // not exactly Roboto Medium 14SP or whatever
    // 400 is too skinny, 500 is too thick
    fontWeight: Platform.OS === 'ios' ? 'normal' : '400',
  },
  emptySectionHeader: {
    backgroundColor: colors.tableDeadSpace,
    paddingTop: 15,
  },

  // *** between cells/ sections ***

  itemSeparator: {
    borderBottomColor: colors.tableCellDividingLine,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
