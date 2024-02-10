export abstract class IUseCase<Request, Response> {
  abstract execute(request: Request): Promise<Response>;
}
