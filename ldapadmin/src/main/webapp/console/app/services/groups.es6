angular.module('admin_console')
.factory('Group', ['$resource', 'LDAP_BASE_URI', ($resource, baseUri) =>
  $resource(baseUri + 'groups', {}, {
    query: {
      cache: true,
      method:'GET',
      isArray:true
    }
  })
]).factory('groupAdminList', [ () => {
  var admin_groups = [
    'ADMINISTRATOR',
    'PENDING',
    'GN_ADMIN',
    'GN_EDITOR',
    'GN_REVIEWER',
    'MOD_ANALYTICS',
    'MOD_EXTRACTORAPP',
    'MOD_LDAPADMIN',
    'USER'
  ]
  return () => admin_groups
}]).factory('groupAdminFilter', [ 'groupAdminList', (groupAdminList)  =>
  (group) => groupAdminList().indexOf(group.cn) >= 0
])