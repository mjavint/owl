/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks";

import { Component, useSubEnv, useState } from "@odoo/owl";

export class OwlServices extends Component {
  setup() {
    useSubEnv({
      config: {
        ...getDefaultConfig(),
        ...this.env.config,
      },
    });

    // Creamos la variable de estado partners
    this.state = useState({ partners: useService("owl.getPartners") });
    // Llamamos el servicio de ORM
    // this.orm = useService("orm");
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

OwlServices.template = "owl.OwlServices";
OwlServices.components = { Layout };

registry.category("actions").add("owl.OwlServices", OwlServices);
