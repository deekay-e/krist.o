const { FastifyInstance } = require('fastify')
const { Server } = require('http')

export class KristoServer {
	private app: FastifyInstance

	constructor(app: FastifyInstance) {
		this.app = app
	}

	public start(): void {
		this.securityPlugin(this.app)
		this.standardPlugin(this.app)
		this.routesPlugin(this.app)
		this.globalErrorHandler(this.app)
		this.startServer(this.app)
	}

	private securityPlugin(app: FastifyInstance): void {}

	private standardPlugin(app: FastifyInstance): void {}

	private routesPlugin(app: FastifyInstance): void {}

	private globalErrorHandler(app: FastifyInstance): void {}

	private startServer(app: FastifyInstance): void {}

	private createSocketIO(server: Server): void {}

	private startHttpServer(server: Server): void {}
}