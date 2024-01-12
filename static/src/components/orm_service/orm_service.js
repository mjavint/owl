/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks";

import { Component, useSubEnv, useState } from "@odoo/owl";

export class OrmService extends Component {
  setup() {
    useSubEnv({
      config: {
        ...getDefaultConfig(),
        ...this.env.config,
      },
    });

    this.state = useState({ partners: [] });
    this.orm = useService("orm");
  }

  async getOrmService() {
    const data = await this.orm.searchRead(
      "res.partner",
      [],
      ["image_128", "name", "website", "phone"]
    );
    this.state.partners = data;
  }
}

OrmService.template = "owl.OrmService";
OrmService.components = { Layout };

registry.category("actions").add("owl.OrmService", OrmService);
