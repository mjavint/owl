# -*- coding: utf-8 -*-
{
    'name': 'Owl',
    'version': '17.0.1.0',
    'description': """ Owl Description """,
    'summary': """ Owl Summary """,
    'author': 'devtoolschool',
    'category': 'Technical',
    'depends': ['base', 'web'],
    "data": [
        "views/menus.xml",
        "views/orm_service_views.xml",
        "views/rpc_service_views.xml",
        "views/posts_views.xml",
        "views/action_service_views.xml",
        "views/effect_service_views.xml",
        "views/router_service_views.xml",
        "views/user_service_views.xml",
        "views/company_service_views.xml",
    ],
    'assets': {
        'web.assets_backend': ['owl/static/src/**/*'],
    },
    'application': True,
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
