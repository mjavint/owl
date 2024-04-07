/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks";

import { Component, useSubEnv, useState } from "@odoo/owl";

export class CompanyService extends Component {
  setup() {
    useSubEnv({
      config: {
        ...getDefaultConfig(),
        ...this.env.config,
      },
    });
    this.companyService = useService("company");
    this.state = useState({ current_company: "" });
  }
  getCurrentCompany() {
    const company = this.companyService;
    console.log(company);
    this.state.current_company = JSON.stringify(company.allowedCompanies);
  }
}

CompanyService.template = "owl.CompanyService";
CompanyService.components = { Layout };

registry.category("actions").add("owl.companyService", CompanyService);
